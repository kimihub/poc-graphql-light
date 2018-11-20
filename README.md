# i-node

This is a nodejs fallback / master orbitdb instance.

      npm start

## Configuration

Create `.env` then configure `DB_ADDRESS` and `PUBLIC_KEYS`, a list allowed to write on the database :

```
DB_ADDRESS=/orbitdb/${hash}/${name}
PUBLIC_KEYS=${key1},${key2},...
```
