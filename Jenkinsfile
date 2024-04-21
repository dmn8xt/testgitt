pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.43.0-jammy' } }
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