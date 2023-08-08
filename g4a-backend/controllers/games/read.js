// En el archivo 'read.js'

import Game from '../../models/Games.js';

async function read(req, res, next) {
  const { category, title, page } = req.query;
  const perPage = 6;
  const queries = {};
  const sort = { title: 1 }; // Orden ascendente por título

  if (title) {
    queries.title = { $regex: title.trim(), $options: 'i' };
  }

  if (category) {
    queries.category_id = { $in: category.trim().split(',') }; // Ajusta el filtro de categoría según la propiedad del modelo
  }

  try {
    const totalGames = await Game.countDocuments(queries);
    const totalPages = Math.ceil(totalGames / perPage);

    let currentPage = parseInt(page, 10) || 1;
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const skip = (currentPage - 1) * perPage;
    const games = await Game.find(queries)
      .select('-createdAt -updatedAt') // Proteger las propiedades createdAt y updatedAt
      .sort(sort)
      .skip(skip)
      .limit(perPage);

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const pagination = {};
    if (prevPage !== null) {
      pagination.prev = prevPage;
    }
    if (nextPage !== null) {
      pagination.next = nextPage;
    }

    return res.status(200).json({
      games,
      success: true,
      pagination,
    });
  } catch (error) {
    next(error);
  }
}

export default read;
