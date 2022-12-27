
module.exports = async function (context, req) {
  var tasks = context.bindings.tasks || [];

  context.res = {
    body: tasks
  };
}