
const status200 = "http://httpstat.us/200"
const status305 = "http://httpstat.us/305"
const status404 = "http://httpstat.us/404"
const status500 = "http://httpstat.us/500"


class StatusCodePage{
    checkStatusLink(){
        cy.get('#statuscodes-content').invoke('show')
    }
    checkStatusCode200(){
        cy.request(status200).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.include('200 OK')
        })
    }
    checkStatusCode305(){
        cy.request({
            url: status305,
            failOnStatusCode: false,
            followRedirect: false
        }).then((response)=>{
            expect(response.status).to.eq(305)
            expect(response.body).to.include('305 Use Proxy')
        })
    }
    checkStatusCode404(){
        cy.request({
            url: status404,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(404)
            expect(response.body).to.include('404 Not Found')
        })
    }
    checkStatusCode500(){
        cy.request({
            url: status500,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(500)
            expect(response.body).to.include('500 Internal Server Error')
        })
    }
}
export default StatusCodePage;