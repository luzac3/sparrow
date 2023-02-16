export class GetUrlParams{
  getUrlParams(key) {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    return params(key);
  }
}
