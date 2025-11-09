"use client"

import Companies from "@/components/shared/Companies"
import { Button } from "@/components/ui/Button"
import InputGroup from "@/components/ui/InputGroup"



const Join = () => {
  return (
    <>
      <div className="bg-[#003AD4] mx-auto mb-8">
        <div className="flex flex-row justify-between items-center gap-25 py-[20px] px-[20px]">
          <div className="w-full mx-auto flex flex-col justify-between items-start gap-10 text-white">
            <h1>Join Our Journey & Get Early Access</h1>
            <p>“Sponsoring participants through Enoverlab created real impact—many now have career-ready skills.”</p>
          </div>
          <form
            className="mx-auto space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup placeholder="Full Name" className="h-14" required />
            <InputGroup
              placeholder="E-mail"
              type="email"
              className="h-14"
              required
            />
            <Button type="submit" className="w-full text-lg">
              Join
            </Button>
          </form>
        </div>
      </div>
      <Companies />
    </>
  )
}

export default Join;