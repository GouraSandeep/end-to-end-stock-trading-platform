function toNumber(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export const normalizeHoldingInput = (doc) => {
  const out = { ...doc };

  out.qty = toNumber(out.qty, 1);
  out.price = toNumber(out.price, 0);
  out.avg = toNumber(out.avg, out.qty > 0 ? out.price / out.qty : out.price);
  out.net = toNumber(out.net, 0);
  out.day = toNumber(out.day, 0);
  out.isLoss = Boolean(out.isLoss);

  if (out.name) out.name = out.name.trim();

  return out;
};

export const normalizePositionInput = (body) => ({
  product: body.product || body.type || body.prod,
  name: body.name || body.symbol || body.scrip,
  qty: Number(body.qty ?? body.quantity),
  avg: Number(body.avg ?? body.average),
  price: Number(body.price ?? body.ltp),
  net: String(body.net ?? body.netChange),
  day: String(body.day ?? body.dayChange),
  isLoss: Boolean(body.isLoss ?? body.loss),
});

export const normalizeOrderInput = (body) => ({
  name: body.name || body.symbol || body.scrip,
  qty: Number(body.qty ?? body.quantity),
  price: Number(body.price ?? body.ltp),
  mode: String(body.mode || body.MODE),
});
