class ScoreManager

  score: 0
  scoreText: null

  constructor: ->
    @scoreText = game.add.text(16, 4, 'Score: 0', {
      font: '32px invasion2000',
      fill: '#fff'
    })
    @scoreText.fixedToCamera = true


  increment: (amount) ->
    @score += amount
    @scoreText.text = 'Score: ' + @score
    return