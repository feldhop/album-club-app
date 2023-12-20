export const onRequestGet = function () {
    const stmt = DATABASE.prepare(
        `SELECT
            albums.id, 
            albums.name AS albumname, 
            artists.name AS artistname 
        FROM albums
            INNER JOIN artists ON artists.id = albums.artist`
    );

    return new Response(JSON.stringify(stmt.all(), null, 2),
    {
      headers: {
        "content-type": "text/json"
      }
    });
}