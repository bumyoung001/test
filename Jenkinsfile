pipeline {
  agent any
  stages {
    stage('dir_remove') {
      steps {
        sh 'rm -rf *'
      }
    }

    stage('node_setting') {
      steps {
        sh 'npm -v'
        sh 'node -v'
        sh 'mkdir source'
        sh 'mkdir html'
      }
    }
    
    dir('source') {
      stage('git_clone') {
        steps {
          git 'https://github.com/bumyoung001/test.git'
          sh 'rm -rf ./.git'
        }
        steps {
          sh 'npm i'
          sh 'npm run build'
        }
      }
      stage('movel file') {
        sh 'cp -rf build/. ../html'
      }
    }

  }
  tools {
    nodejs 'nodejs'
  }
}
