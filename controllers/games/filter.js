import Game from '../../models/Games.js';

const ITEMS_PER_PAGE = 10;

const game_filter = async (req, res) => {
  try {
    const { categories, page } = req.query;

    const currentPage = parseInt(page) || 1; // default 1
    const skipItems = (currentPage - 1) * ITEMS_PER_PAGE;

    // Construct a query to find games with matching genres
    const gamesFound = {
      "genres.description": { $in: [categories] } // Assuming categories is a single genre description
    };
    
    const totalGames = await Game.countDocuments(gamesFound);

    const games = await Game.find(gamesFound)
      .skip(skipItems)
      .limit(ITEMS_PER_PAGE)
      .exec();

    const totalPages = Math.ceil(totalGames / ITEMS_PER_PAGE);
    
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    res.json({
      games,
      currentPage,
      totalPages,
      prevPage,
      nextPage
    });
  } catch (error) {
    console.error('Error while fetching filtered games:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { game_filter };
