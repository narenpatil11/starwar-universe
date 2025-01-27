export function mapToCssModules(className = '', cssModule: Record<string, any> | undefined) {
    if (!cssModule) return className;
    return className
        .split(' ')
        .map((c) => cssModule[c] || c)
        .join(' ');
}
