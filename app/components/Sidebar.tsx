"use client"

import { useState } from "react"
import LocationInput from "./LocationInput"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"




export default function Sidebar() {
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [userType, setUserType] = useState<"rider" | "pillion">("rider")


  return (
    <aside className="w-96 bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Find a Trip</h2>
      <form  className="space-y-4">
        <LocationInput label="From" value={fromLocation} onChange={setFromLocation} />
        <LocationInput label="To" value={toLocation} onChange={setToLocation} />
        
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1" />
        </div>
        
        <div>
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1" />
        </div>
        
        <div>
          <Label>I am a</Label>
          <ToggleGroup
            type="single"
            value={userType}
            onValueChange={(value) => value && setUserType(value as "rider" | "pillion")}
            className="justify-start mt-1"
          >
            <ToggleGroupItem value="rider">Rider</ToggleGroupItem>
            <ToggleGroupItem value="pillion">Pillion</ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <Button type="submit" className="w-full">
          Find Trips
        </Button>
      </form>
    </aside>
  )
}
