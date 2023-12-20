export const onRequestGet = async function (context) {
    const stmt = context.env.DATABASE.prepare(
        `SELECT
            albums.id, 
            albums.name AS albumname, 
            artists.name AS artistname 
        FROM albums
            INNER JOIN artists ON artists.id = albums.artist`
    );

    const { results } = await stmt.all();

    return new Response (
        JSON.stringify(results, null, 2),
        {
            headers: {
            "content-type": "text/json"
            }
        }
    );
}