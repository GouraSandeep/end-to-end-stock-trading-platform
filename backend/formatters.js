/* ===================== HOLDINGS ===================== */
export const holdingListResponse = (items) => ({
  status: "success",
  data: items.map((h) => ({
    symbol: h.name,
    quantity: h.qty,
    avgPrice: h.avg,
    ltp: h.price,
    netChange: h.net,
    dayChange: h.day,
    isLoss: h.isLoss,
  })),
  meta: { count: items.length, apiVersion: "1.0" },
});

export const holdingSingleResponse = (h) => ({
  status: "success",
  data: {
    id: h._id,
    symbol: h.name,
    quantity: h.qty,
    avgPrice: h.avg,
    ltp: h.price,
    netChange: h.net,
    dayChange: h.day,
    isLoss: h.isLoss,
  },
  meta: { apiVersion: "1.0" },
});

/* ===================== POSITIONS ===================== */
export const positionListResponse = (items) => ({
  status: "success",
  data: items.map((p) => ({
    productType: p.product,
    symbol: p.name,
    quantity: p.qty,
    avgPrice: p.avg,
    pnl: (p.price - p.avg) * p.qty,
    ltp: p.price,
    netChange: p.net,
    dayChange: p.day,
    isLoss: p.isLoss,
  })),
  meta: { count: items.length, apiVersion: "1.0" },
});

export const positionSingleResponse = (p) => ({
  status: "success",
  data: {
    id: p._id,
    productType: p.product,
    symbol: p.name,
    quantity: p.qty,
    avgPrice: p.avg,
    ltp: p.price,
    netChange: p.net,
    dayChange: p.day,
    isLoss: p.isLoss,
  },
  meta: { apiVersion: "1.0" },
});

/* ===================== ORDERS ===================== */
export const orderSingleResponse = (o) => ({
  status: "success",
  data: {
    id: o._id,
    symbol: o.name,
    quantity: o.qty,
    price: o.price,
    mode: o.mode,
  },
  meta: { apiVersion: "1.0" },
});

export const ordersListResponse = (items) => ({
  status: "success",
  data: items.map((h) => ({
    id: h._id,
    symbol: h.name,
    quantity: h.qty,
    price: h.price,
    mode: h.mode,
  })),
  meta: { count: items.length, apiVersion: "1.0" },
});
