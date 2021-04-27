function ipToInt(ip) {
  const ips = ip.split(".").map(item => Number(item));
  ips[0] = ips[0] << 24;
  ips[1] = ips[1] << 16;
  ips[2] = ips[2] << 8;

  return ips.reduce((a, b) => {
    return a + b;
  });
}

console.log(ipToInt("10.0.3.193")); //167773121
