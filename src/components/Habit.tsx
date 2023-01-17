type habitProps = {
    completed: number;
}

export function Habit(props: habitProps) {
    return (
        <h1>{props.completed}</h1>
    )
}