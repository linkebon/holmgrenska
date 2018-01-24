#!/bin/bash
rm -rf build
mkdir -p ./build/holmgrenska
cp -R src/resources/* ./build/holmgrenska
npm run generateFrontend


