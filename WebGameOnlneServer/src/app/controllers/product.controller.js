const mysql = require('../../libs/database/connect.mysql');

class productController {
  // lấy tất cả game
  getAllGames(req, res) {
    try {
      const query = 'SELECT game.*, image.url FROM game INNER JOIN image ON game.idGame = image.game_id';

      mysql.query(query, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }

        res.status(200).json({ data: results });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }
  // lấy một game cho trang detail
  getOneGame(req, res) {
    try {
      const gameId = req.params.id;
      const query = `SELECT game.*, image.url FROM game INNER JOIN image ON game.idGame = image.game_id WHERE game.idGame = ${gameId}`;

      mysql.query(query, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }

        if (results.length === 0) {
          return res.status(404).json({ message: 'Game not found' });
        }

        const game = results[0];
        res.status(200).json({ data: game });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }
  // thêm danh sách game vào cart
  addToCart(req, res) {
    try {
      const { gameId, userId } = req.body;

      const checkCartQuery = 'SELECT COUNT(*) as count FROM cart WHERE game_id = ? AND username = ?';

      mysql.query(checkCartQuery, [gameId, userId], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }

        if (results[0].count > 0) {
          return res.status(400).json({ error: 'Game đã có trong giỏ hàng' });
        }

        const getGameQuery = 'SELECT * FROM game INNER JOIN image ON game.idGame = image.game_id WHERE idGame = ?';

        mysql.query(getGameQuery, gameId, (err, gameResult) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Lỗi server' });
          }

          if (gameResult.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy game' });
          }
          console.log(gameResult[0]);
          const { idGame, title, price, category, url } = gameResult[0];
          const insertCartQuery =
            'INSERT INTO cart ( game_id, username, price, url, title, category) VALUES (?, ?, ?, ?, ?, ?)';

          mysql.query(insertCartQuery, [idGame, userId, price, url, title, category], (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Lỗi server' });
            }

            res.status(200).json({ message: 'Đã thêm game vào giỏ hàng' });
          });
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }
  // lấy danh sách cart show ra bên trang cart
  getDetailCartUser(req, res) {
    const userCart = req.params.id;

    try {
      const query = `SELECT * FROM cart where username = ${userCart}`;
      mysql.query(query, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }

        if (results.length === 0) {
          return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
        }

        res.status(200).json({ data: results });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }
  // xoá game khỏi trang cart
  deleteDetailCartUser(req, res) {
    const { idCart } = req.params;

    try {
      const deleteQuery = `DELETE FROM cart WHERE idCart = ${idCart}`;
      mysql.query(deleteQuery, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }

        res.status(200).json({ message: 'Xóa sản phẩm khỏi giỏ hàng thành công' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }

  // xử lý thêm thông tin người dùng và sản phẩm game vào bảng paymanet
  postPayment(req, res) {
    try {
      const { order_id, status, email, phone, fullname } = req.body;
      const userCart = req.params.id;
  
      const getCartItemsQuery = `SELECT * FROM cart WHERE username = ${userCart}`;
      mysql.query(getCartItemsQuery, (err, cartItems) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Lỗi server' });
        }
  
        if (cartItems.length === 0) {
          return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
        }
  
        const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  
        const insertPaymentQuery = 'INSERT INTO payment (order_id, status, email, phone, fullname, total) VALUES (?, ?, ?, ?, ?, ?)';
        mysql.query(
          insertPaymentQuery,
          [order_id, status, email, phone, fullname, totalPrice],
          (err, paymentResult) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Lỗi server' });
            }
  
            const paymentId = paymentResult.insertId;
  
            const insertPaymentDetailQuery = 'INSERT INTO payment_detail (payment_id, game_id, title, price, url) VALUES (?, ?, ?, ?, ?)';
            cartItems.forEach((item) => {
              const { game_id, title, price, url } = item;
              mysql.query(insertPaymentDetailQuery, [paymentId, game_id, title, price, url], (err) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({ error: 'Lỗi server' });
                }
              });
            });
  
            const deleteCartItemsQuery = `DELETE FROM cart WHERE username = ${userCart}`;
            mysql.query(deleteCartItemsQuery, (err) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Lỗi server' });
              }
  
              res.status(200).json({ message: 'Thêm thông tin vào bảng payment thành công' });
            });
          }
        );
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi server' });
    }
  }
}

module.exports = new productController();
