const context = require.context('./', false, /\.js$/);
const appliedConfig = context(`./${process.env.NODE_ENV}.js`);

export default appliedConfig.default;
