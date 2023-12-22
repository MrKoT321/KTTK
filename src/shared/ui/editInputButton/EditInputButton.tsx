import styles from './EditInputButton.module.css'

type EditInputType = 'font' | 'fontSize'

type EditInputButtonProps = {
    type: EditInputType
    editTools: {
        selectedTextFonts: string
        setSelectedTextFonts(selectedTextFonts: string): void
        selectedTextSize: number
        setSelectedTextSize(selectedTextSize: number): void
    }
}

const EditInputButton = ({ editTools, type }: EditInputButtonProps) => {
    const availableFonts = ['FuturaPT', 'Arial', 'Times New Roman', 'Comic Sans MS']
    const availableFontsSizes = [10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80]
    return (
        <div className={styles.editInputButton}>
            {type === 'font' && (
                <select
                    value={editTools.selectedTextFonts}
                    className={styles.input}
                    onChange={(e) => editTools.setSelectedTextFonts(e.target.value)}
                >
                    {availableFonts.map((font, index) => (
                        <option key={index} value={font}>
                            {font}
                        </option>
                    ))}
                </select>
            )}

            {type === 'fontSize' && (
                <select
                    value={editTools.selectedTextSize}
                    className={styles.input}
                    onChange={(e) => editTools.setSelectedTextSize(parseInt(e.target.value))}
                >
                    {availableFontsSizes.map((fontSize, index) => (
                        <option key={index} value={fontSize}>
                            {fontSize}
                        </option>
                    ))}
                </select>
            )}
        </div>
    )
}

export { EditInputButton }
