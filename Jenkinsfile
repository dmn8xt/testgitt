pipeline {
   agent { docker { image '95a77343608fmyjenkins-blueocean:2.440.3-1' } }
   stages {

      stage ('install playwright') {
        steps {
            sh '''
             npm i -D @playwright/test
             npx playwright install
            '''
        }
      }   

      stage('e2e-tests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test --list'
            sh 'npx playwright test'
         }
      }
   }
}