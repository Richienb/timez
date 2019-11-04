import test from "ava"
import insideString from "inside-string"
import timeZone from "."

test("main", (t) => {
    t.true(insideString(timeZone, "/"))
})
