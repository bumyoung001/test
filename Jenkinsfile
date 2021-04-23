pipeline {
  agent any
  stages {
    stage('tools') {
      steps {
        tool(name: 'nodejs', type: 'nodejs')
      }
    }

    stage('dir_remove') {
      steps {
        sh 'rm -rf *'
      }
    }

    stage('node_setting') {
      steps {
        echo '${nodejs}'
        sh 'npm -v'
        sh 'node -v'
        sh 'mkdir source'
        sh 'mkdir html'
      }
    }

  }
}