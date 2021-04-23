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
        sh '''echo "${nodejs}"
env.NODE_HOME  = "${nodejs}"
env.PATH = "${nodejs}/bin:${env.PATH}"
npm -v
node -v
mkdir source
mkdir html'''
      }
    }

  }
}