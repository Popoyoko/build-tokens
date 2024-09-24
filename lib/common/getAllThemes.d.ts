declare const getAllThemes: (basePath: any) => Promise<{
    name: string;
    modes: string[];
}[]>;
export default getAllThemes;
