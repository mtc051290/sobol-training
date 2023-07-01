const tf = require('@tensorflow/tfjs-node');

const LOAD_MODEL = true;

const neuralExample = async () => {
    // Measure the time it takes to run the example code below (in milliseconds) 
    const startTime = Date.now();
    let model = null;

    if( !LOAD_MODEL ) {
        // Create a truth table for the AND operator (3 inputs)
        const input = tf.tensor2d([
            [0,0,0],
            [0,0,1],
            [0,1,0],
            [0,1,1],
            [1,0,0],
            [1,0,1],
            [1,1,0],
            [1,1,1]
        ]);
        const output = tf.tensor2d([
            [1], 
            [0], 
            [0],
            [1],
            [0],
            [0],
            [0],
            [1],
        ]);


        // Define the architecture
        model = tf.sequential();
        model.add(tf.layers.dense({ units: 8, inputShape: [3], activation: 'relu' }));
        model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

        // Compile the model
        model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

        // Train the model
        const epochs = 30000;
        const batchSize = 32;
        await model.fit(input, output, { epochs, batchSize })
            .then((history) => {
                console.log('Training completed.');
            })
            .catch((error) => {
                console.error('Error during training:', error);
            });

    } else {
        model = await tf.loadLayersModel('file:///Users/migueltorres/Documents/Sobol2/NeuralModels/model-and/model.json');
    }

    const testInput = tf.tensor2d([
        [0,1,1],
    ]);
    
    const startPredictionTime = Date.now();
    console.log("Predictions:");
    const predictions = model.predict(testInput);
    predictions.print();
    const endPredictionTime = Date.now();

    const endTime = Date.now();
    console.log(`Total time: ${(endTime - startTime) / 1000} seconds`);
    console.log(`Prediction time: ${(endPredictionTime - startPredictionTime) / 1000} seconds`);

    if( !LOAD_MODEL ){
        await model.save('file:///Users/migueltorres/Documents/Sobol2/NeuralModels/model-and');
    }
    
    model.dispose();
    console.log("Done.");
}

neuralExample();