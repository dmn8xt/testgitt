pipeline {
   agent { docker { image 'myjenkins-blueocean:2.440.3-1' } }
   stages {

      stage ('install playwright') {
        steps {
            sh '''
             npm i -D @playwright/test
             npx playwright install
            '''
        }
      }   

      stage('e2etests') {
         steps {
            sh 'npm ci'
            sh 'npx playwright test --list'
            sh 'npx playwright test'
         }
      }
   }
}