const http = require("http");
const fs = require("fs");
const PORT = 1111;
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write('<!doctype html><head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></head><body class="text-center"><h1 class="text-center">File Handling Operations</h1><hr /><a href="/createfile" class="btn btn-outline-primary ms-4">Create</a><a href="/readfile" class="btn btn-outline-info ms-4">Read</a><a href="/updatefile" class="btn btn-outline-warning ms-4">Update</a><a href="/deletefile" class="btn btn-outline-danger ms-4">Delete</a><hr/></body></html>');
        res.end();
    }
    else if (req.url == '/createfile') {
        if (fs.existsSync("newfile.txt")) {
            res.end("<h1>Already Exists!!<h1>");
        }
        else {
            fs.writeFile("newfile.txt", "File is created", (err) => {
                if (err) throw err;
                else res.end("<h1>File created!!</h1>");
            })
        }
    }
    else if (req.url == "/readfile") {
        if (!fs.existsSync("newfile.txt")) {
            res.end("<h1>File does not Exists!!</h1>");
        } else {
            var ref = fs.readFile("newfile.txt", (err, data) => {
                if (err) throw err;
                else
                {
                    
                }
                    console.log(data.toString());
            });
        }
    } else if (req.url == "/updatefile") {
        if (fs.existsSync("newfile.txt")) {
            fs.appendFile(
                "newfile.txt",
                "\n <h1>Data is appended successfully!!</h1>",
                (err) => {
                    if (err) throw err;
                    else res.end("<h1>Data updated successfuly!!!!</h1>");
                }
            );
        } else {
            res.end("<h1>File does not Exists!!</h1>");
        }
    } else if (req.url == "/deletefile") {
        if (!fs.existsSync("newfile.txt")) {
            res.end("<h1>File does not Exists!!</h1>");
        } else {
            fs.unlink("newfile.txt", (err) => {
                if (err) throw err;
                else res.end("<h1>File Deleted Successfully!!</h1>");
            });
        }
    } else {
        res.end("<h1>Invalid URl</h1>");
    }
});


server.listen(PORT, (err) => {
    if (err) throw err;
    else {
        console.log(`Work On Port : ${PORT}`);
    }
});
