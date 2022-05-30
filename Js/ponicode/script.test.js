const rewire = require("rewire")
const script = rewire("../script")
const languagesData = script.__get__("languagesData")
// @ponicode
describe("languagesData", () => {
    test("0", () => {
        document.body.insertAdjacentHTML("afterbegin", `<div id="wrapper0"><div>
        	<div id="myChart2"></div>
        </div>
        </div>`)
        let result = languagesData()
        expect(result).toMatchSnapshot()
        expect(document.getElementById("wrapper0")).to.matchSnapshot()
        document.body.removeChild(document.getElementById("wrapper0"))
    })
})
