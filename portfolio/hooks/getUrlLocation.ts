const getUrlLocation = () => {
  const fullUrl = window.location.href.split("/");

  let url = "";
  fullUrl.splice(3, fullUrl.length).map((x: string) => {
    url += `/${x}`;
  });

  return url;
};

export default getUrlLocation;
