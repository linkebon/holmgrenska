#!/bin/bash
rm -rf build
mkdir build
cp -R src/resources/* ./build
npm run generateFrontend


