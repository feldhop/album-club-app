var src_default = {
  async fetch(request, env) {
    
    const { DATABASE } = env;
    const stmt = DATABASE.prepare(
        `SELECT
            albums.id, 
            albums.name AS albumname, 
            artists.name AS artistname 
        FROM albums
            INNER JOIN artists ON artists.id = albums.artist`
    );

    const { results } = await router.route(request);

    return new Response (
      JSON.stringify(results, null, 2),
      {
        headers: {
          "content-type": "text/json"
        }
      }
    );
  }
};

export {
  src_default as default
};
