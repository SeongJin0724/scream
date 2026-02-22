const { items, mockUser, mockDeals, mockWishlist, mockReviews, MOCK_TOKEN } = require('./_mockData');

module.exports = (req, res) => {
  const slug = Array.isArray(req.query.slug) ? req.query.slug : [req.query.slug || ''];
  const path = slug.join('/');
  const method = req.method.toUpperCase();
  const body = req.body || {};
  const query = req.query;
  const auth = (req.headers.authorization || '').replace(/^bearer\s+/i, '');

  const send = (data, status = 200) => res.status(status).json(data);

  // OPTIONS (CORS preflight)
  if (method === 'OPTIONS') return res.status(200).end();

  // ── 상품 ────────────────────────────────────────────────────
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

  // GET /api/items  →  전체 목록
  if (path === 'items' && method === 'GET') return send([items]);

  // GET /api/items/:itemKey
  if (slug.length === 2 && slug[0] === 'items' && method === 'GET') {
    const itemKey = parseInt(slug[1]);
    const item = items.find((i) => i.itemKey === itemKey);
    if (!item) return send({ message: '상품을 찾을 수 없습니다.' }, 404);
    return send([item]);
  }

  // GET /api/items/:itemKey/offers
  if (slug.length === 3 && slug[0] === 'items' && slug[2] === 'offers') {
    const itemKey = parseInt(slug[1]);
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

  // GET /api/brands/:brand
  if (slug.length === 2 && slug[0] === 'brands') {
    return send([items.filter((i) => i.brand.toLowerCase() === slug[1].toLowerCase())]);
  }

  // ── 인증 ────────────────────────────────────────────────────
  // POST /api/login
  if (path === 'login') {
    const { email, password } = body;
    if (!email || !password) return send({ message: '이메일과 비밀번호를 입력해주세요.' }, 400);
    return send({ token: MOCK_TOKEN, message: '로그인 성공' });
  }

  // POST /api/logout
  if (path === 'logout') return send({ message: '로그아웃 성공' });

  // GET /api/user
  if (path === 'user' && method === 'GET') {
    if (!auth) return send({ message: '토큰이 없습니다.' }, 401);
    return send({ user: mockUser });
  }

  // POST /api/updateUser
  if (path === 'updateUser') return send({ user: { ...mockUser, ...body }, newToken: MOCK_TOKEN });

  // POST /api/register
  if (path === 'register') return send({ message: '회원가입이 완료되었습니다.' });

  // POST /api/send-verification-code
  if (path === 'send-verification-code') return send({ message: '인증 코드가 발송되었습니다.' });

  // POST /api/verify-code
  if (path === 'verify-code') return send({ message: '이메일이 인증되었습니다.' });

  // ── 위시리스트 ───────────────────────────────────────────────
  // GET /api/get/wishlist
  if (path === 'get/wishlist') {
    if (!auth) return send([[]]);
    return send([mockWishlist]);
  }

  // GET /api/get/wishlistDetail
  if (path === 'get/wishlistDetail') {
    if (!auth) return send({ data: [] });
    const itemKey = parseInt(query.itemKey);
    return send({ data: mockWishlist.filter((w) => w.itemKey === itemKey) });
  }

  // POST /api/post/wishlist
  if (path === 'post/wishlist') return send({ message: '위시리스트에 추가되었습니다.' });

  // POST /api/delete/wishlist
  if (path === 'delete/wishlist') return send({ message: '위시리스트에서 삭제되었습니다.' });

  // ── 거래 ────────────────────────────────────────────────────
  // POST /api/applyOfferDeal
  if (path === 'applyOfferDeal') {
    return send({ message: '거래 신청이 완료되었습니다.', dealKey: Math.floor(Math.random() * 9000) + 1000 });
  }

  // GET /api/offerDeal/:dealKey
  if (slug.length === 2 && slug[0] === 'offerDeal') {
    const dealKey = parseInt(slug[1]);
    const deal = mockDeals.find((d) => d.dealKey === dealKey);
    if (!deal) {
      const si = items[0];
      return send({ dealKey, itemKey: si.itemKey, itemTitle: si.title, size: si.sizes[0] || 'FREE', price: si.launchPrice, totalPrice: Math.floor(si.launchPrice * 1.01), fee: Math.floor(si.launchPrice * 0.01), deadline: '2026-05-31T00:00:00.000Z', deal: '판매' });
    }
    const item = items.find((i) => i.itemKey === deal.itemKey) || {};
    return send({ ...deal, img: item.img ? item.img.split(',')[0].trim() : '' });
  }

  // POST /api/offerDealDetail
  if (path === 'offerDealDetail') return send([mockDeals.filter((d) => d.deal === body.deal)]);

  // POST /api/orderDetail
  if (path === 'orderDetail') return send([mockDeals.filter((d) => d.deal === body.deal && d.status === '완료')]);

  // DELETE /api/deleteOfferDeal/:dealKey
  if (slug.length === 2 && slug[0] === 'deleteOfferDeal') return send({ message: '거래가 취소되었습니다.' });

  // POST /api/sendOrdersell
  if (path === 'sendOrdersell') return send({ message: '판매 주문이 접수되었습니다.' });

  // ── 마이페이지 ───────────────────────────────────────────────
  // POST /api/mypage/account
  if (path === 'mypage/account') return send({ message: '계좌 정보가 저장되었습니다.' });

  // POST /api/mypage/address
  if (path === 'mypage/address') return send({ message: '주소가 저장되었습니다.' });

  // PUT /api/infochange
  if (path === 'infochange') return send({ message: '정보가 변경되었습니다.' });

  // ── 관리자 ───────────────────────────────────────────────────
  // GET /api/admin
  if (path === 'admin' && method === 'GET') {
    const pending = mockDeals
      .filter((d) => !d.sign && d.status === '대기중')
      .map((d) => {
        const item = items.find((i) => i.itemKey === d.itemKey) || {};
        return { ...d, img: item.img ? item.img.split(',')[0].trim() : '' };
      });
    return send([pending]);
  }

  // POST /api/adminSign
  if (path === 'adminSign') return send({ message: '승인 처리되었습니다.' });

  // POST /api/delete/adminSign
  if (path === 'delete/adminSign') return send({ message: '거래가 취소 처리되었습니다.' });

  // ── 결제 ────────────────────────────────────────────────────
  // POST /api/payment/kakao
  if (path === 'payment/kakao') {
    return send({ tid: 'mock_tid_' + Date.now(), next_redirect_pc_url: '/payment/approval?pg_token=mock_pg_token&dealKey=' + (body.partner_order_id || ''), created_at: new Date().toISOString() });
  }

  // GET /api/payment/approval
  if (path === 'payment/approval') {
    return send({ aid: 'mock_aid_' + Date.now(), partner_order_id: query.dealKey || '', item_name: 'SCREAM 상품', amount: { total: 0 }, approved_at: new Date().toISOString(), message: '결제가 완료되었습니다.' });
  }

  // ── 스타일/리뷰 ─────────────────────────────────────────────
  // GET /api/reviews  or  POST /api/reviews {user_id}
  if (path === 'reviews') {
    if (method === 'GET') return send([mockReviews]);
    if (method === 'POST') {
      return send([mockReviews.filter((r) => String(r.user_id) === String(body.user_id))]);
    }
  }

  // GET /api/styleItem/:reviewKey
  if (slug.length === 2 && slug[0] === 'styleItem') {
    const reviewKey = parseInt(slug[1]);
    const review = mockReviews.find((r) => r.reviewKey === reviewKey);
    if (!review) return send({ message: '리뷰를 찾을 수 없습니다.' }, 404);
    const item = items.find((i) => i.itemKey === review.itemKey) || {};
    return send({ reviewKey: review.reviewKey, itemKey: review.itemKey, img: item.img || review.img, title: item.title || '', brand: item.brand || '', launchPrice: item.launchPrice || 0, content: review.content });
  }

  // DELETE /api/deleteReview/:reviewKey
  if (slug.length === 2 && slug[0] === 'deleteReview') return send({ message: '리뷰가 삭제되었습니다.' });

  // POST /api/posts
  if (path === 'posts') {
    return send([mockReviews.filter((r) => String(r.user_id) === String(body.user_id))]);
  }

  return send({ message: 'Not Found' }, 404);
};
