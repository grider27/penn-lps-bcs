// generate team roster
const generateRoster = employees => {
    const finalHTML = [];
    // filter out managers only from the staff array passed and call html render function
    finalHTML.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerHTML(manager))
    );
    // filter out managers only from the staff array passed and call html render function
    finalHTML.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerHTML(engineer))
    );
    finalHTML.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternHTML(intern))
    );

    return finalHTML.join("")

}

const generateManagerHTML = manager => {
    return `
        <div class="card">
            <img src="https://picsum.photos/300" alt="random" style="width:100%">
            <div class="card-header text-center">
                <h2>${manager.getName()}</h2>
                <h3><i class="fas fa-mug-hot"></i>  ${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office number: ${manager.officeNumber}</p>
            </div>
        </div>
    `
};

const generateEngineerHTML = engineer => {
    return `
        <div class="card">
            <img src="https://picsum.photos/300" alt="random" style="width:100%">
            <div class="card-header text-center">
                <h2>${engineer.getName()}</h2>
                <h3><i class="fas fa-glasses"></i>  ${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>Github:<a href="https://github.com/${engineer.github}" target="_blank">
                ${engineer.github}  <i class="fab fa-github"></i></a>
            </div>
        </div>
    `
};

const generateInternHTML = intern => {
    return `
        <div class="card">
            <img src="https://picsum.photos/300" alt="random" style="width:100%">
            <div class="card-header text-center">
                <h2>${intern.getName()}</h2>
                <h3><i class="fas fa-user-graduate"></i>  ${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    `
};

// final html content
function generateTeamProfile(data) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <!--Link to BootStrap 4.5.3 version used-->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <!-- Font Awesome -->
                <script src="https://kit.fontawesome.com/1d37754851.js" crossorigin="anonymous"></script>
            <!-- Add icon library from Fonts Awesome for icons (if needed) -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <!-- Fonts -->
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
            <title>Team | Profile</title>
        </head>
        <style>
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            max-width: 300px;
            margin: auto;
            text-align: left;
        }
        h2, h3 {
            text-align: left;
        }
        </style>
        <body>
            <header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 jumbotron mb-5">
                            <h1 class="text-center">Team Profile</h1>
                        </div>
                    </div>
                </div>
            </header>
            <section class="section container-fluid">
                <div class="card-deck justify-content-center">
                    ${generateRoster(data)}
                </div>
            </section>
        </body>
        </html>
        `
}


module.exports = generateTeamProfile;