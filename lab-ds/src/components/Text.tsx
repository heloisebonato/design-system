interface TextProps {
    size?: 'sm' | 'md' | 'lg';
}

export function Text({ size = 'md' }: TextProps) {
    return (
        <span className="text-grey-100 font-sans">text</span>
    )
}