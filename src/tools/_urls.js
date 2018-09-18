const parse = url => {
  const search = url.split('?')[1]
  return search
    ? JSON.parse('{"' + decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') + '"}')
    : {}
}

export const Urls = {
  parse
}
