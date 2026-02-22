const { items, mockUser, mockDeals, mockWishlist, mockReviews, MOCK_TOKEN } = require('./_mockData');

const sessionWishlists = new Map();
let wishKeyCounter = 1000;
const getWishlistForToken = (token) => {
  if (!sessionWishlists.has(token)) sessionWishlists.set(token, []);
  return sessionWishlists.get(token);
};

module.exports = (req, res) => {
  const urlPathname = (req.url || '').split('?')[0];
  const method = req.method.toUpperCase();
  const body = req.body || {};
  const query = req.query || {};
  const rawQueryPath = query.path;
  let path = Array.isArray(rawQueryPath) ? rawQueryPath.join('/') : rawQueryPath;

  if (!path) {
    path = urlPathname.replace(/^\/api\//, '').replace(/^\//, '').replace(/\/$/, '');
  }

  path = String(path || '').replace(/^\//, '').replace(/\/$/, '');

  const remap = {
    'get/wishlist': 'wishlist',
    'get/wishlistDetail': 'wishlistDetail',
    'post/wishlist': 'wishlistPost',
    'delete/wishlist': 'wishlistDel',
    'mypage/account': 'mypageAccount',
    'mypage/address': 'mypageAddress',
    'payment/kakao': 'payKakao',
    'payment/approval': 'payApproval',
    'delete/adminSign': 'delAdminSign',
  };
  if (remap[path]) path = remap[path];

  if (path.startsWith('items/') && path.endsWith('/offers')) {
    const parts = path.split('/');
    query.itemKey = query.itemKey || parts[1];
    path = 'offers';
  } else if (path.startsWith('items/')) {
    const parts = path.split('/');
    query.itemKey = query.itemKey || parts[1];
    path = 'item';
  } else if (path.startsWith('brands/')) {
    const parts = path.split('/');
    query.brand = query.brand || parts[1];
    path = 'brand';
  } else if (path.startsWith('offerDeal/')) {
    const parts = path.split('/');
    query.dealKey = query.dealKey || parts[1];
    path = 'offerDeal';
  } else if (path.startsWith('deleteOfferDeal/')) {
    const parts = path.split('/');
    query.dealKey = query.dealKey || parts[1];
    path = 'delDeal';
  } else if (path.startsWith('styleItem/')) {
    const parts = path.split('/');
    query.reviewKey = query.reviewKey || parts[1];
    path = 'styleItem';
  } else if (path.startsWith('deleteReview/')) {
    const parts = path.split('/');
    query.reviewKey = query.reviewKey || parts[1];
    path = 'delReview';
  }

  const auth = (req.headers.authorization || '').replace(/^bearer\s+/i, '');

  const send = (data, status = 200) => res.status(status).json(data);

  if (method === 'OPTIONS') return res.status(200).end();

  // ── 상품 ──────────────────────────────────────────────────────────────────

  // GET /api/newin?offset=N
  if (path === 'newin') {
    const offset = parseInt(query.offset) || 0;
    const sorted = [...items].sort((a, b) => b.itemKey - a.itemKey);
    return send([sorted.slice(offset, offset + 5)]);
  }

  // GET /api/filter?category=X
  if (path === 'filter') {
    const { category } = query;
    if (!category || category === 'all') return send(items);
    return send(items.filter((i) => i.category === category));
  }

  // GET /api/search?term=X
  if (path === 'search') {
    const term = (query.term || '').toLowerCase();
    if (!term) return send(items);
    return send(
      items.filter(
        (i) =>
          i.title.toLowerCase().includes(term) ||
          i.brand.toLowerCase().includes(term) ||
          i.korTitle.includes(term) ||
          i.korBrandName.includes(term)
      )
    );
  }

  // GET /api/items → 전체 목록
  if (path === 'items' && method === 'GET') return send([items]);

  // GET /api/item?itemKey=N  ← rewritten from /api/items/:itemKey
  if (path === 'item' && method === 'GET') {
    const itemKey = parseInt(query.itemKey);
    const item = items.find((i) => i.itemKey === itemKey);
    if (!item) return send({ message: '상품을 찾을 수 없습니다.' }, 404);
    return send([item]);
  }

  // GET /api/offers?itemKey=N  ← rewritten from /api/items/:itemKey/offers
  if (path === 'offers') {
    const itemKey = parseInt(query.itemKey);
    const item = items.find((i) => i.itemKey === itemKey);
    if (!item) return send({ message: '상품을 찾을 수 없습니다.' }, 404);

    let sales = mockDeals.filter((d) => d.itemKey === itemKey && d.deal === '판매' && d.status === '대기중');
    let purchases = mockDeals.filter((d) => d.itemKey === itemKey && d.deal === '구매' && d.status === '대기중');

    if (sales.length === 0) {
      sales = [{ dealKey: 9000 + itemKey, itemKey, itemTitle: item.title, description: '정품 보증, 상태 최상', size: item.sizes[0] || 'FREE', price: Math.floor(item.launchPrice * 1.1), deadline: '2026-05-31T00:00:00.000Z' }];
    }
    if (purchases.length === 0) {
      purchases = [{ dealKey: 9500 + itemKey, itemKey, itemTitle: item.title, description: '정품이면 바로 구매합니다', size: item.sizes[0] || 'FREE', price: Math.floor(item.launchPrice * 0.95), deadline: '2026-05-31T00:00:00.000Z' }];
    }
    return send({ sales, purchases });
  }

  // GET /api/brand?brand=X  ← rewritten from /api/brands/:brand
  if (path === 'brand') {
    const brand = query.brand || '';
    return send([items.filter((i) => i.brand.toLowerCase() === brand.toLowerCase())]);
  }

  // ── 인증 ──────────────────────────────────────────────────────────────────

  if (path === 'login') {
    const { email, password } = body;
    if (!email || !password) return send({ message: 'Email and password are required.' }, 400);
    const token = `mock_access_token_${Date.now()}`;
    return send({ token, message: 'Login success' });
  }

  if (path === 'logout') return send({ message: '로그아웃 성공' });

  if (path === 'user' && method === 'GET') {
    if (!auth) return send({ message: '토큰이 없습니다.' }, 401);
    return send({ user: mockUser });
  }

  if (path === 'updateUser') return send({ user: { ...mockUser, ...body }, newToken: MOCK_TOKEN });
  if (path === 'register') return send({ message: '회원가입이 완료되었습니다.' });
  if (path === 'send-verification-code') return send({ message: '인증 코드가 발송되었습니다.' });
  if (path === 'verify-code') return send({ message: '이메일이 인증되었습니다.' });

  // ── 위시리스트 ─────────────────────────────────────────────────────────────

  // GET /api/wishlist  ← rewritten from /api/get/wishlist
  if (path === 'wishlist' && method === 'GET') {
    if (!auth) return send([[]]);
    const list = getWishlistForToken(auth);
    return send([list]);
  }

  // GET /api/wishlistDetail  ??rewritten from /api/get/wishlistDetail
  if (path === 'wishlistDetail') {
    if (!auth) return send({ data: [] });
    const itemKey = parseInt(query.itemKey);
    const list = getWishlistForToken(auth);
    return send({ data: list.filter((w) => w.itemKey === itemKey) });
  }

  // POST /api/wishlistPost  ??rewritten from /api/post/wishlist
  if (path === 'wishlistPost') {
    if (!auth) return send({ message: 'Unauthorized' }, 401);
    const itemKey = parseInt(body.itemKey);
    if (!itemKey) return send({ message: 'Invalid itemKey' }, 400);
    const list = getWishlistForToken(auth);
    const exists = list.some((w) => w.itemKey === itemKey);
    if (!exists) {
      list.push({ wishKey: wishKeyCounter++, user_id: body.user_id || 0, itemKey });
    }
    return send({ message: 'Wishlist item added.' });
  }

  // POST /api/wishlistDel  ??rewritten from /api/delete/wishlist
  if (path === 'wishlistDel') {
    if (!auth) return send({ message: 'Unauthorized' }, 401);
    const itemKey = parseInt(body.itemKey);
    const wishKey = parseInt(body.wishKey);
    const list = getWishlistForToken(auth);
    const next = list.filter((w) => {
      if (Number.isFinite(wishKey)) return w.wishKey !== wishKey;
      if (Number.isFinite(itemKey)) return w.itemKey !== itemKey;
      return true;
    });
    sessionWishlists.set(auth, next);
    return send({ message: 'Wishlist item removed.' });
  }

  // ── 거래 ──────────────────────────────────────────────────────────────────

  if (path === 'applyOfferDeal') {
    return send({ message: '거래 신청이 완료되었습니다.', dealKey: Math.floor(Math.random() * 9000) + 1000 });
  }

  // GET /api/offerDeal?dealKey=N  ← rewritten from /api/offerDeal/:dealKey
  if (path === 'offerDeal' && method === 'GET') {
    const dealKey = parseInt(query.dealKey);
    const deal = mockDeals.find((d) => d.dealKey === dealKey);
    if (!deal) {
      const si = items[0];
      return send({ dealKey, itemKey: si.itemKey, itemTitle: si.title, size: si.sizes[0] || 'FREE', price: si.launchPrice, totalPrice: Math.floor(si.launchPrice * 1.01), fee: Math.floor(si.launchPrice * 0.01), deadline: '2026-05-31T00:00:00.000Z', deal: '판매' });
    }
    const item = items.find((i) => i.itemKey === deal.itemKey) || {};
    return send({ ...deal, img: item.img ? item.img.split(',')[0].trim() : '' });
  }

  if (path === 'offerDealDetail') return send([mockDeals.filter((d) => d.deal === body.deal)]);
  if (path === 'orderDetail') return send([mockDeals.filter((d) => d.deal === body.deal && d.status === '완료')]);

  // DELETE /api/delDeal?dealKey=N  ← rewritten from /api/deleteOfferDeal/:dealKey
  if (path === 'delDeal') return send({ message: '거래가 취소되었습니다.' });

  if (path === 'sendOrdersell') return send({ message: '판매 주문이 접수되었습니다.' });

  // ── 마이페이지 ─────────────────────────────────────────────────────────────

  // POST /api/mypageAccount  ← rewritten from /api/mypage/account
  if (path === 'mypageAccount') return send({ message: '계좌 정보가 저장되었습니다.' });

  // POST /api/mypageAddress  ← rewritten from /api/mypage/address
  if (path === 'mypageAddress') return send({ message: '주소가 저장되었습니다.' });

  if (path === 'infochange') return send({ message: '정보가 변경되었습니다.' });

  // ── 관리자 ────────────────────────────────────────────────────────────────

  if (path === 'admin' && method === 'GET') {
    const pending = mockDeals
      .filter((d) => !d.sign && d.status === '대기중')
      .map((d) => {
        const item = items.find((i) => i.itemKey === d.itemKey) || {};
        return { ...d, img: item.img ? item.img.split(',')[0].trim() : '' };
      });
    return send([pending]);
  }

  if (path === 'adminSign') return send({ message: '승인 처리되었습니다.' });

  // POST /api/delAdminSign  ← rewritten from /api/delete/adminSign
  if (path === 'delAdminSign') return send({ message: '거래가 취소 처리되었습니다.' });

  // ── 결제 ──────────────────────────────────────────────────────────────────

  // POST /api/payKakao  ← rewritten from /api/payment/kakao
  if (path === 'payKakao') {
    return send({ tid: 'mock_tid_' + Date.now(), next_redirect_pc_url: '/payment/approval?pg_token=mock_pg_token&dealKey=' + (body.partner_order_id || ''), created_at: new Date().toISOString() });
  }

  // GET /api/payApproval  ← rewritten from /api/payment/approval
  if (path === 'payApproval') {
    return send({ aid: 'mock_aid_' + Date.now(), partner_order_id: query.dealKey || '', item_name: 'SCREAM 상품', amount: { total: 0 }, approved_at: new Date().toISOString(), message: '결제가 완료되었습니다.' });
  }

  // ── 스타일/리뷰 ───────────────────────────────────────────────────────────

  if (path === 'reviews') {
    if (method === 'GET') return send([mockReviews]);
    if (method === 'POST') return send([mockReviews.filter((r) => String(r.user_id) === String(body.user_id))]);
  }

  // GET /api/styleItem?reviewKey=N  ← rewritten from /api/styleItem/:reviewKey
  if (path === 'styleItem') {
    const reviewKey = parseInt(query.reviewKey);
    const review = mockReviews.find((r) => r.reviewKey === reviewKey);
    if (!review) return send({ message: '리뷰를 찾을 수 없습니다.' }, 404);
    const item = items.find((i) => i.itemKey === review.itemKey) || {};
    return send({ reviewKey: review.reviewKey, itemKey: review.itemKey, img: review.img || item.img, title: item.title || '', brand: item.brand || '', launchPrice: item.launchPrice || 0, content: review.content });
  }

  // DELETE /api/delReview?reviewKey=N  ← rewritten from /api/deleteReview/:reviewKey
  if (path === 'delReview') return send({ message: '리뷰가 삭제되었습니다.' });

  if (path === 'posts') {
    return send([mockReviews.filter((r) => String(r.user_id) === String(body.user_id))]);
  }

  return send({ message: 'Not Found' }, 404);
};