
function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.local") || isInNet(host, "192.168.0.0", "255.255.0.0")) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
