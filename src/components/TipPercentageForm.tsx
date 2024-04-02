import type { Dispatch, SetStateAction } from "react"
import { tipOptions } from "../data/tipOptions"

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div
                        key={tipOption.id}
                        className="flex gap-x-2"
                    >
                        <label
                            htmlFor={tipOption.id}>{tipOption.label}
                        </label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
