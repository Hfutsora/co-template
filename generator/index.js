module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'vue-router': '^3.0.3',
      'vuex': '^3.1.0',
      "vuebar": "0.0.20",
      "vuelidate": "^0.7.5",
      "nprogress": "^0.2.0"
    },
    devDependencies: {
      'git-cz': '^2.0.0',
    },
    scripts: {
      'serve': 'vue-cli-service serve',
      'build:testing': 'vue-cli-service build --mode testing',
      'build:staging': 'vue-cli-service build --mode staging',
      'build:production': 'vue-cli-service build',
      'commit': 'git add . && npx git-cz'
    },
    config: {
      commitizen: {
        path: './node_modules/git-cz'
      }
    },
    gitHooks: {
      'commit-msg': 'node scripts/verifyCommitMsg.js'
    }
  })

  if (options['ui-framework'] === 'element-ui') {
    api.extendPackage({
      dependencies: {
        'element-ui': '^2.4.5'
      }
    })
  }
}