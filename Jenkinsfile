pipeline {
  agent {
    node {
      label 'front'
    }

  }
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
        ehco "${nodejs}"
        env.NODE_HOME = "${nodejs}"
        env.PATH = "${nodejs}/bin:${evn.PATH}"
      }
      steps {
        sh 'npm -v'
        sh 'node -v'
        sh 'mkdir source'
        sh 'mkdir html'
      }
    }

  }
}
