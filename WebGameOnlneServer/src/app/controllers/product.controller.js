const sql = require('../../libs/database/connect.mysql');

class productController {
  async getAllGames(req, res) {
    try {
      
      const query = 'SELECT game.*, image.url FROM game INNER JOIN image ON game.id = image.game_id';
      console.log(111, query);
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
}

module.exports = new productController();
