import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Siapa President Direktur Metrodata ?",
        value: "Siapa President Direktur Metrodata ?"
    },
    { text: "Keungan metrodata pada tahun 2021 dan 2022?", value: "Keungan metrodata pada tahun 2021 dan 2022?" },
    { text: "Program pelatihan yang dimiliki metrodata?", value: "Program pelatihan yang dimiliki metrodata?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
