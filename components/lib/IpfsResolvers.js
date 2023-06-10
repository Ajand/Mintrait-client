export const ipfsUrlToNormal = (url) => {
  const cid = url.replace("ipfs://", "");
  return `https://${cid}.ipfs.w3s.link/`;

  return url.replace("ipfs://", "https://ipfs.io/ipfs/");
};

export const ipfsUrlResolver = (cid) => {
  return `https://${cid}.ipfs.w3s.link/`;
};

export const ipfsAddressResolver = (cid) => {
  return `ipfs://${cid}`;
};
