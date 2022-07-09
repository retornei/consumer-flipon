import {fone, cpfcnpj} from "../utils/masks"

export type MaskTypes = 'fone' | 'cpfcnpj'

export default function useMask() {
    const masks = { fone, cpfcnpj }

    function mask(value: string, maskType: MaskTypes): string {
        if (!masks[maskType]) {
            return value;
        }

        return masks[maskType](value)
    }

    return { mask }
}