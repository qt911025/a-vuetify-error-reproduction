Vuetify Bug reproduction

vue-jest@^4 has a compatible Jest version 25. However coverage test crashed.

Error reports like:
```
  ● Test suite failed to run

    ~~/vue-jest-test2/Foo.vue: don't know how to turn this value into a node

      at valueToNode (node_modules/@babel/types/lib/converters/valueToNode.js:87:9)
          at transformFile.next (<anonymous>)
```

**Reproduct:** install and `yarn run coverage`

**Issue:** It works well at Jest 24

**Expected:** It works well at the latest version of Jest.