module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var password = req.query.password
    var output = ""
    if (password == "letmein") {
        output = "Access granted."
    } else {
        output = "Access denied."
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: output
    };
}