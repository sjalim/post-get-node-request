const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demodb"

});

exports.insert = (req, res) => {
    const { name, phone, email } = req.body;
    console.log(name);

    db.query("INSERT INTO data SET ?", {
        name: name,
        phone: phone,
        email: email

    }, (error, results) => {

        if (error) {
            console.log(error);
        } else {

            db.query("select * from data", (err, results) => {
                if (err) throw err
                return res.render('index', {
                    data: results,
                    userData: null,
                    message: 'user registered',
                    title: 'Express'
                });
            });
            console.log(results);

        }

    });


    console.log("check");
};

exports.data = (req, res) => {

    db.query("select * from data", (err, results) => {
        if (err) throw err

        console.log(results);
        return res.render('index', {
            data: results,
            message: '',
            userData: null,
            title: 'Express'
        });
    });

};

exports.update = (req, res) => {

    const id = req.params.id;

    console.log(id);

    db.query('select * from data where id = ?',[id],(error,userData)=>{
        if(error) throw error
        db.query("select * from data", (err, results) => {
            if (err) throw err
            return res.render('update', {
                data: results,
                message: '',
                userData: userData[0],
                title: 'Express'
            });
        });
    });
};

exports.updated = (req,res) =>{
    const nameUpdate = req.query.nameUpdate;
    const emailUpdate = req.query.emailUpdate;
    const phoneUpdate = req.query.phoneUpdate;
    const id = req.params.id;

    console.log(" name:"+nameUpdate+ "email:"+ emailUpdate + "phone:" + phoneUpdate + "id:" +id);

    db.query(`update data set ? where id = ${id}`,{
        name: nameUpdate,
        email: emailUpdate,
        phone: phoneUpdate
    },(error,results)=>{

        if(error) throw error;
        db.query("select * from data", (err, results) => {
            if (err) throw err
            return res.render('index', {
                data: results,
                userData: null,
                message: 'user data updated',
                title: 'Express'
            });

        });
    });
};

exports.show = (req, res) => {

    const id = req.params.id;

    console.log(id);

    db.query('select * from data where id = ?', [id], (error, userData) => {
        if (error) throw error
        db.query("select * from data", (err, results) => {
            if (err) throw err
            return res.render('index', {
                data: results,
                message: '',
                userData: userData[0],
                title: 'Express'
            });
        });
    });
};
