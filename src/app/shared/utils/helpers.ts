export class DateHelper {
  static formatDate(date: Date | string): string {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static isToday(date: Date | string): boolean {
    const today = new Date();
    const d = new Date(date);
    return d.toDateString() === today.toDateString();
  }

  static daysDifference(date1: Date | string, date2: Date | string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

export class StringHelper {
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static toCamelCase(str: string): string {
    return str.replace(/[-_\s](.)/g, (_, c) => c.toUpperCase());
  }

  static toSnakeCase(str: string): string {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
  }

  static isEmpty(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0;
  }
}

export class ArrayHelper {
  static unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }

  static chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  static flatten<T>(arrays: T[][]): T[] {
    return arrays.reduce((flat, arr) => flat.concat(arr), []);
  }

  static sortBy<T>(array: T[], key: keyof T, ascending: boolean = true): T[] {
    return [...array].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }
}

export class ObjectHelper {
  static deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  static merge<T extends object>(obj1: T, obj2: Partial<T>): T {
    return { ...obj1, ...obj2 };
  }

  static isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }

  static keys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
  }
}
