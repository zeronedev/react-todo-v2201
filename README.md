# 6.1 Set Selectors

# atoms.tsx

import { atom, selector } from "recoil";

export const minuteState = atom({
key: "minutes",
default: 0,
});

export const hourSelector = selector<number>({
key: "hours",
get: ({ get }) => {
const minutes = get(minuteState);
return minutes / 60;
},
set: ({ set }, newValue) => {
const minutes = Number(newValue) \* 60;
set(minuteState, minutes);
},
});

# App.tsx

import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
const [minutes, setMinutes] = useRecoilState(minuteState);
const [hours, setHours] = useRecoilState(hourSelector);
const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
setMinutes(+event.currentTarget.value);
};
const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
setHours(+event.currentTarget.value);
};
return (
<div>
<input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
<input
        onChange={onHoursChange}
        value={hours}
        type="number"
        placeholder="Hours"
      />
</div>
);
}

export default App;
