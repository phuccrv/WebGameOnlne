const sql = require('../../libs/database/connect.mysql');

class productController {
  async getAllGames(req, res) {
    try {
      
      const query = 'SELECT game.*, image.url FROM game INNER JOIN image ON game.id = image.game_id';
     
      sql.query(query, (err, results) =>{
        if(err){
          return res.status(500).json({message: "lỗi server"})
        }
        res.status(200).json({data: results});
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }


  async getOneGame(req, res) {
    try {
      const gameId = req.params.id;
      const query = `SELECT game.*, image.url FROM game INNER JOIN image ON game.id = image.game_id WHERE game.id = ${gameId}`;
      sql.query(query, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Server error' });
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Game not found' });
        }
  
        const game = results[0];
        res.status(200).json({ data: game });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = new productController();
